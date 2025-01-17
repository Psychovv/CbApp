import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Pressable, View, Image, Text } from 'react-native';

import { Avatar } from './avatar';
import { Card } from '../app/(drawer)/(tabs)';
import React from 'react';
import { useRouter } from 'expo-router'; // Importar useRouter para navegação

type CardServicProps = {
  data: Card
}

export function CardServicAtraso({ data }: CardServicProps) {
  const router = useRouter();

  // Função para navegar para a tela de detalhes
  const handlePress = () => {
    router.push({
      pathname: '../../../detalhes',
      params: {
        cardData: JSON.stringify(data), // Passar o cardData como string para evitar erros
        prazo: JSON.stringify(data.in_progress),
      },
    });
  };
  return (
    <Pressable
      onPress={handlePress} // Navega quando o card é pressionado
      className='bg-white h-auto rounded-lg my-3 mx-1 px-2 py-1 flex flex-row justify-start shadow-sm shadow-red-500/50 border-b border-red-400 '
    >
      <View className='flex flex-grow justify-start gap-2 ml-3'>
        <View>
          <Text className='text-xl font-semibold'>{data.veiculoModelo} {data.veiculoCor} {data.veiculoAno}</Text>
          <Text className='text-sm color-slate-500 font-semibold' numberOfLines={1} lineBreakMode='tail' >{data.tipoServico}</Text>
          <Text className='text-sm color-slate-500 font-light' numberOfLines={1} lineBreakMode='tail' >{data.descricao}</Text>
          <Text className='text-sm color-slate-500 mt-2' numberOfLines={1} lineBreakMode='tail' >R$:{data.precoServico},00</Text>
        </View>
        <View className='flex flex-row justify-start items-center'>
          <Text className='text-md color-red-500'>{data.date}</Text>
          <Text className='mx-2'>até</Text>
          <Text className='text-md color-red-500'>{data.end}</Text>
        </View>
      </View>


    </Pressable>
  );
}