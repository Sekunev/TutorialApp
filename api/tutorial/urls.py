from django.urls import path, include
from rest_framework import routers
from .views import tutorial_detail, tutorial_list

from .views import (
    # Tutorials,
    # TutorialDetail,
    TutorialMVS
)

router = routers.DefaultRouter()
router.register('tutorials', TutorialMVS)

urlpatterns = router.urls


#fbv
urlpatterns += [
    path("tutorialsfbv/",tutorial_list,name="tutorial"),
    path("tutorialsfbv/<int:id>",tutorial_detail,name="tutorial_detail"),
]