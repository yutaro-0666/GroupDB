'use strict';

import * as ops from './handleOps';

( async ()=> {
    // Pc
    // 作成モードで実行
    await ops.CreateShow('app.record.create.show');

    // 編集モードで実行
    await ops.EditShow('app.record.edit.show');

    // 詳細表示モードで実行
    await ops.DetailShow('app.record.detail.show');

})();