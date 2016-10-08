/* eslint import/prefer-default-export: 0, no-shadow:0, consistent-return: 0 */
import pool from '../datastores/mysql/mysql'

const API_BASE = '/api/user'

export const register = (app) => {
    app.post(`${API_BASE}/register`, (req, res) => {
        res.send('你好注册')
    })
}

export const login = (app) => {
    app.get(`${API_BASE}/login`, (req, res) => {
        pool.getConnection((err, connection) => {
            connection.beginTransaction((err) => {
                if (err) {
                    throw err
                }
                connection.query('INSERT INTO tb_user (username, password) VALUES (?, ?)', [Math.random(), '11358'], (err) => {
                    if (err) {
                        return connection.rollback(() => {
                            throw err
                        })
                    }
                    connection.query('SELECT * FROM tb_user', (err, result) => {
                        if (err) {
                            return connection.rollback(() => {
                                throw err
                            })
                        }
                        connection.commit((err) => {
                            if (err) {
                                res.send('错误了!')
                                return connection.rollback(() => {
                                    throw err
                                })
                            }
                            res.send(result)
                        })
                    })
                })
            })
            connection.release()
        })
    })
}
