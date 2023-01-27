'use strict';

/**
 * 環境に応じてAppIdを指定する
 */
export function AppId(){

    let groupDBAppId = kintone.app.getId();
    if(!groupDBAppId) groupDBAppId = kintone.mobile.app.getId()

    // ユーザーDB
    let userDBAppId = null;

    if(groupDBAppId === 0){
        // prod
        userDBAppId = 0;

    }else{
        // demo
        userDBAppId = 192;
    } 

    return {
        groupDBAppId,
        userDBAppId,
    }
}