import { http, HttpResponse } from 'msw';
import paleBlueDot from '@/assets/imgs/palido-ponto-azul.jpg';

export const handlers = [
  http.get(/https:\/\/api\.deepspacestore\.com\/offers\/(.+)/, () => {
    return HttpResponse.json({
      'name': 'Pálido Ponto Azul',
      'value': 49.90,
      'author': 'Carl Sagan',
      'description': 'Com a mesma linguagem envolvente do best-seller Cosmos, que conquistou milhões de leitores pelo mundo, Carl Sagan traça a história das primeiras aventuras extraterrestres e avalia o futuro que se abre para nós a partir das viagens feitas pelo sistema solar e para galáxias distantes.',
      'dimensions': '22.8 x 15.2 x 2.6 cm',
      'pages': '336 páginas',
      'language': 'Português',
      'publisher': 'Companhia das Letras',
      'image': paleBlueDot,

      'paymentOptions': [
        'creditCard',
        'bill',
        'pix',
        'googlePay'
      ],
    })
  }),
]
