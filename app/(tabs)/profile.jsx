import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity, Button} from "react-native";

import { icons } from "../../constants";

import {images} from '../../constants';
import { EmptyState} from "../../components/EmptyState";
import InfoBox from "../../components/InfoBox";


const Profile = ({navigation}) => {


  const logout = async () => {
  
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
  
      
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={()=>navigation.navigate('/(auth)/sign-in')}
              
              className="flex w-full items-end mb-10"
            > 
            
            
            <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
              
           
             
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={images.profile}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
            title="Nino"
            containerStyles='mt-5'
            titleStyles="text-lg"
            />

<View className="mt-5 flex flex-row">
              <InfoBox
                title="0"
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>

           
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
