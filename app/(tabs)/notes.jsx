import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import StudyMaterials from '../../components/StudyMaterials'
// import { EmptyState, SearchInput} from "../../components/SearchInput";

const Notes = () => {
  const [refreshing, setrefreshing] = useState(false)
  const onRefresh = async () => {
    setrefreshing(true);

    setrefreshing(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit =() => {
  
    }
  }
  return (
   
   <SafeAreaView className="bg-primary border-2 h-full">
    <FlatList
    data={[]}
   
    keyExtractor={(item) => item.$id}
    renderItem={({item}) => (
     <Text className="text-3xl text-white">{item.id}</Text>

    )}
    ListHeaderComponent={() =>(
<View className="my-6 px-4 space-y-6">
<View className="justify-between items-start flex-row mb-6">
<View>
  <Text className="text-2xl text-gray-100">
    Welcome Back
  </Text>
  <Text className="text-2xl font-psemibold text-white">
    Nino
  </Text>
 
</View>
<View className="mt-1.5">
    <Image
    source={images.logo}
    className="w-9 h-10"
    resizeMode='contain'
    />
    </View>
</View>
<SearchInput />
<View className="w-full flex-1 pt-5 pb-8">
  <Text className="text-gray-100 text-lg font-pregular mb-3">
    Upload Study Materials
  </Text>

<StudyMaterials 
title={"Upload Text Notes"}
// handlePress={()=> router.push('/(tabs)/home')}
containerStyles="mt-7"
/>
<StudyMaterials 
title={"Upload Image Notes"}
// handlePress={()=> router.push('/(tabs)/home')}
containerStyles="mt-7"
/>
<StudyMaterials 
title={"Upload Video"}
// handlePress={()=> router.push('/(tabs)/home')}
containerStyles="mt-7"
/>
</View>
</View>

    )}
   
    refreshControl={<RefreshControl  refreshing={refreshing} onRefresh={onRefresh}/>}
    />
   </SafeAreaView>
  )
}

export default Notes