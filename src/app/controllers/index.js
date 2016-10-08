import { register, login } from './userController'

export default (app) => {
    register(app)
    login(app)
}
