function __getRecordById(state, id) {
    return state.records.find(record => record.id === id);
}

function __maxId(state) {
    return state.records.reduce((prev, curr) => {
        return curr.id > prev ? curr.id : prev;
    }, 0)
}

export default {
    namespaced: true,
    state: {
        records: [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
            { id: 4, name: 'D' },
            { id: 5, name: 'E' },
            { id: 6, name: 'F' },
            { id: 7, name: 'G' },
            { id: 8, name: 'H' },
        ],
    },
    getters: {
        getRecords: state => state.records,
        getRecordById: state => id => {
            return state.records.find(record => record.id === id);
        }
    },
    mutations: {
        setRecordById(state, record) {
            let existedRecord = __getRecordById(state, record.id);
            existedRecord.name = record.name;
        },
        removeRecordById(state, id) {
            let existedRecord = __getRecordById(state, id);

            state.records.splice(state.records.indexOf(existedRecord), 1)
        },
        addRecord(state, record) {   
            let maxId = __maxId(state);
            record.id = maxId + 1;

            state.records.push(record);
        }
    },
    actions: {
        setRecordById({ commit }, data) {
            commit('setRecordById', data);
        },
        addRecord({ commit }, data) {
            commit('addRecord', data);
        },
        removeRecordById({ commit }, id) {
            commit('removeRecordById', id);
        },
    },
}