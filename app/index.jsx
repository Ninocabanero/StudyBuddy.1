import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import {Redirect, router} from 'expo-router'
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
  <SafeAreaView className="bg-cyan-950 h-full">
    <ScrollView contentContainerStyle={{ height: '100% '}}>
      <View className="w-full justify-center items-center 
      min-h-[85vh] px-4">
        <Image
          source={images.buddy}
         className="max-w--[380px] w-full h-[60px]"
          resizeMode="contain"
        />
        <Image
         source={images.studlogo}
         className="max-w--[380px] w-full h-[300px]"
         resizeMode="contain"
          />
      <View className="relative mt-5">
        <Text className="text-3xl text-white font-bold text-center">
        Share your knowledge, grow together with
          <Text className="text-secondary-200"> StudyBuddy</Text>
          </Text> 
       
      </View>
      <Text className="text-sm font-pregular 
      text-gray-100 mt-7 text-center"> Create a collaborative learning community with StudyBuddy</Text>

       <CustomButton 
       title="Continue with Email"
       handlePress={()=> router.push('/sign-in')}
       containerStyles="w-full mt-7"
       />

      </View>
    </ScrollView>
    <StatusBar backgroundColor='#161622'
    style='light'/>
  </SafeAreaView>
  );
}

