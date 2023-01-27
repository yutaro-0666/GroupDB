'use stirict';

import { RatePlanTableFieldToDisable } from "../molecules/ratePlanTableFieldToDisable";

/**
 * 開発者を対象に入力制御するフィールドリスト
 */
export function FieldToDisableDeveropper(record: eventRecord){

    let disablList: fieldType[] = [record.団体ID];

    // 料金プランテーブルの入力制御ストを追加
    disablList = disablList.concat(RatePlanTableFieldToDisable(record).listForDeveroper)
    
    return disablList;
}