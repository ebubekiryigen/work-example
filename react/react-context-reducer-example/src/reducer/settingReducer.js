

export default function settingReducer(state,action) {
    switch(action.type) {
        case 'TOGGLE_THEME':
            const theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme',theme)
            return{
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        case 'TOGGLE_LANGUAGE':
            const language = state.language === 'tr' ? 'en' : 'tr'
            localStorage.setItem('language',language)
            return{
                ...state,
                language: state.language === 'tr' ? 'en' : 'tr'
            }
    }
}