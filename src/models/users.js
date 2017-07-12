import * as usersService from '../services/users';
// usersService

// fetch({page}), remove(id) , patch(id, values), create(values)

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        page: null
    },
    reducers: {
        save(state, {payload: {data: list, total, page}}) {
            return {...state, list, total, page};
        }
    },
    effects: {
        *fetch({payload: {page = 1}}, {call, put}) {
            // usersService.fetch
            const { data, headers } = yield call(usersService.fetch, { page });
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: parseInt(headers['x-total-count'], 10),
                    page: parseInt(page, 10),
                }
            });
        },
        *remove({ payload: id }, { call, put }) {
            // usersService.remove
            yield call(usersService.remove, id);
            yield put({ type: 'reload' });
        },
        *patch({ payload: { id, values } }, { call, put }) {
            // usersService.patch
            yield call(usersService.patch, id, values);
            yield put({ type: 'reload' });
        },
        *create({ payload: values }, { call, put }) {
            // usersService.create
            yield call(usersService.create, values);
            yield put({ type: 'reload' });
        },
        *reload(action, { put, select }) {
            const page = yield select(state => state.users.page);
            yield put({ type: 'fetch', payload: { page } });
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/users') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        }
    }
};
