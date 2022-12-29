from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
    CursorPagination
)

class CustomPageNumberPagination(PageNumberPagination):
    page_size = 3
    page_query_param = 'sayfa'
    
class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 3
    limit_query_param = 'adet'
    limit_query_description = ('Sayfa başına sonuç sayısı')
    offset_query_param = 'baslangic'

class CustomCursorPagination(CursorPagination):
    cursor_query_param = 'imlec'
    page_size = 4
    ordering = 'id'
