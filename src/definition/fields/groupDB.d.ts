declare namespace groupDB.types {
  interface Fields {
    団体ID: kintone.fieldTypes.SingleLineText;
    団体名: kintone.fieldTypes.SingleLineText;
    リンク: kintone.fieldTypes.Link;
    管理組織: kintone.fieldTypes.OrganizationSelect;
    担当組織: kintone.fieldTypes.OrganizationSelect;
    営業チラシ: kintone.fieldTypes.File;
    料金プラン: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          チャージ率: kintone.fieldTypes.Number;
          適用開始日: kintone.fieldTypes.Date;
          プランID: kintone.fieldTypes.SingleLineText;
          プラン名: kintone.fieldTypes.SingleLineText;
        };
      }>;
    };
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
