export enum Order {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum FilterOperatorTypeEnum {
  EQ = 'EQ',
  NE = 'NE',
  LESSTHAN = 'LESSTHAN',
  LESSTHAN_EQ = 'LESSTHAN_EQ',
  GREATERTHAN = 'GREATERTHAN',
  GREATERTHAN_EQ = 'GREATERTHAN_EQ',
  CONTAINS = 'CONTAINS',
  BETWEEN = 'BETWEEN',
  BETWEEN_EQ = 'BETWEEN_EQ'
}

export enum FilterFieldTypeEnum {
  DATE = 'DATE',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  STRING = 'STRING'
}

export enum RoleTypeEnum {
  ADMIN = 'ADMIN',
  HR = 'HR',
  USER = 'USER'
}