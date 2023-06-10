{
  /* Header */
}
<View className="flex-row justify-between gap-2 pb-3 mx-2">
  <View className="flex-col">
    <Text className="text-xl">Tel Aviv University{origin}</Text>
    <Text className="font-bold text-2xl">
      Current Location
      <ChevronDownIcon size={20} color="#00CCBB" />
    </Text>
  </View>
  <View className="mx-2">
    <Image
      source={require("../../assets/user-photo.png")}
      className="h-14 w-14 rounded-full mt-2"
    />
  </View>
</View>;
