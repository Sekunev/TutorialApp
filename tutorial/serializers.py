from rest_framework import serializers
from .models import Tutorial


class TutorialSerializer(serializers.ModelSerializer):

    class Meta:
        
        model = Tutorial
        fields = (
            'id',
            'title',
            'description',
            'priority',
            'is_done',
            'created_date',
        )
        # API'de gösterilecek Field'ler.