'use stirict';

import { RatePlanTableFieldToDisable } from "../molecules/ratePlanTableFieldToDisable";

/**
 * 一般ユーザーを対象に入力制御するフィールドリスト
 */
export function FieldToDisableGeneralUser(record: eventRecord){

    let disablList: fieldType[] = [record.団体名, record.団体ID, record.管理組織, record.担当組織];

    // 料金プランテーブルの入力制御ストを追加
    disablList = disablList.concat(RatePlanTableFieldToDisable(record).listForGeneral)
    
    return disablList;
}