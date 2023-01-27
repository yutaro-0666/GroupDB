'use strict';

/**
 * 入力制御する料金プランテーブルのフィールドリスト
 */
export function RatePlanTableFieldToDisable(record: eventRecord){
    const trgTable = record.料金プラン.value;

    // 一般ユーザー向け
    let listForGeneral: fieldType[] = [];
    for(let i = 0; i < trgTable.length; i++){
        let row = trgTable[i].value;
        listForGeneral.push(row.プランID, row.プラン名, row.適用開始日);
    }

    // 開発者向け
    let listForDeveroper: fieldType[] = [];
    for(let i = 0; i < trgTable.length; i++){
        let row = trgTable[i].value;
        listForDeveroper.push(row.プランID);
    }

    return {
        listForGeneral,
        listForDeveroper
    };
}