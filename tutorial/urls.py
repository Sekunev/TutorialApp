from django.urls import path, include
from rest_framework import routers


from .views import (
    # Tutorials,
    # TutorialDetail,
    TutorialMVS
)

router = routers.DefaultRouter()
router.register('tutorials', TutorialMVS)

urlpatterns = [
    path('', include(router.urls))
]