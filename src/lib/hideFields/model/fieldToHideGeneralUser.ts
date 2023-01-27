'use strict';

/**
 * 開発者以外は非表示にするフィールドリスト
 */
export function FieldsToGeneralUser(){
    let hideList: string[] = ['団体ID','プランID', '担当組織', '管理組織'];
    return hideList;
}