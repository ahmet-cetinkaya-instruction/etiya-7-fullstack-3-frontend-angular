export interface PageResponse<TListItemDto> {
  pageIndex: number;
  pageSize: number;
  count: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: TListItemDto[];
}
