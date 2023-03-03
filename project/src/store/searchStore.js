var searchStore = {
    state: function () {
        return {
            searchText: "",
            searchTextArr: [],
        }
    },
    mutations: {
        getSearchText(state, val) {
            state.searchText = val;
        },
        
        changeHistorySearchList(state, val) {
            let index = state.searchTextArr.indexOf(val);
            if (index === -1) {
                state.searchTextArr.push(val);
            }
        },
        deleteHistorySearchList(state, index) {
            state.searchTextArr.splice(index, 1);
        },

    },
    actions: {
        
    },
    getters: {

    }
}
export default searchStore;