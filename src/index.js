import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';

import './index.html';
import './index.css';

// 3 秒
const ERROR_MSG_DURATION = 3; 

// 1. Initialize
const app = dva({
    history: browserHistory,
    onError(e) {
        message.error(e.message, ERROR_MSG_DURATION);
        console.error("app onError -- ", error);
    }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js
// app.model(require('./models/users'))

// 4. Router for browserHistory
app.router(require('./router'));

// 5. Start
app.start('#root');
