// ~~団体DB~~
interface kintoneEvent {
    record: eventRecord;
}

type eventRecord = groupDB.types.SavedFields;

// フィールド(event.record.フィールドコード)の型
type fieldType = kintone.fieldTypes.SingleLineText | kintone.fieldTypes.Number | kintone.fieldTypes.MultiLineText |
                 kintone.fieldTypes.DropDown | kintone.fieldTypes.Date | kintone.fieldTypes.CheckBox | 
                 kintone.fieldTypes.Time | kintone.fieldTypes.OrganizationSelect | kintone.fieldTypes.RadioButton |
                 kintone.fieldTypes.UserSelect;