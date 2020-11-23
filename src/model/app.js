const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default {
    namespace: `app`,
    state: {
        text: "init"
    },
    reducers: {
        changeText: (state, { text }) => {
            return {
                ...state,
                text: text
            }
        },
    },
    effects: {
        *changeTextAsync({ text }, { put, call }) {
            yield call(sleep, 1000);
            yield put({ type: `app/save`, state: { text: text } });
        }
    }
}