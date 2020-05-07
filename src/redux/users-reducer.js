const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    // пользователи приходят из action компоненты Users с помощью SET_USERS
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                    if (u.id === action.userId) {
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
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

// ActionCreators
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
// сэтаем пользователей (берем из с сервера)
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export default usersReducer;