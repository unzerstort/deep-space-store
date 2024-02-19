<script setup>
import { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions, VRow, VCol, VImg} from 'vuetify/components';
</script>

<script>
export default {
    props: {
        offer: {
            type: Object,
        },
    }
}
</script>

<template>
    <VCard>
        <VCardTitle>{{ offer.name }}</VCardTitle>
        <VCardSubtitle>{{ offer.author }}</VCardSubtitle>
        <VRow>
            <VCol cols="2" align-self="center">
                <VImg 
                    :alt="offer.altText"
                    :src="offer.image" 
                    :lazy-src="offer.image" 
                    aspect-ratio="1/1" 
                    height="200" width="200"
                >
                    <template v-slot:error>
                        <VImg
                            height="200"
                            max-width="200"
                                                src="../../assets/imgs/no-img-available.jpg"
                        ></VImg>
                    </template>

                </VImg>

            </VCol>
                
            <VCol cols="2">
                <VCardText>
        
                    <p>
                        {{offer.description}}
                    </p>
                    
                    <p>
                        <strong>Dimensões: </strong>{{offer.dimensions}}
                    </p>
        
                    <p>
                        <strong>Páginas: </strong>{{ offer.pages }}
                    </p>
        
                    <p>
                        <strong>Idioma: </strong>{{ offer.language }}
                    </p>
                    
                    <p>
                        <strong>Editora: </strong> {{ offer.publisher }}
                    </p>
                </VCardText>

            </VCol>
        </VRow>
        <VCardActions></VCardActions>
    </VCard> 

</template>
