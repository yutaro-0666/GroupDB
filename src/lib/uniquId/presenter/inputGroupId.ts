'use strict';

import { CreateNewId } from "../index";

/**
 * 団体IDを新規に生成してフィールドに反映する
 */
export function InputGroupId(record: eventRecord){
    record.団体ID.value = CreateNewId().団体ID
    return;
}