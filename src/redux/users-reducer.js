const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    // пользователи приходят из action компоненты Users с помощью SET_USERS
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                // Если нам нужно не просто скопировать массив объектов и вставить новый, а один
                // из объектов поменять то нам такой вариант не подходит users: [...state.users] нужно
                // пробежаться по массиву объектов и сделать копию того объекта который мы будем менять
                // return {...u, followed: true} кого менять мы узнаем ч/з action.userId который придет из UI(компоненты)
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                // если id не совподает возвращаем тотже самый объект
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: // [...state.users, ...action.users] - склеиваем два массива
            return { ...state, users: [ ...state.users, ...action.users ]}
        default:
            return state;
    }
}

// ActionCreators
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
// сэтаем пользователей (берем из с сервера)
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;