import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./HomeStyle";
import Btnlogin from "../../Components/Btnlogin";
import { useSelector } from "react-redux";
import { remove } from "../../redux/actions/deletedata";
export const Home = ({ navigation }) => {
  const data = useSelector((state) => state.users);
  return (
    <View style={styles.containers}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item,index}) => (
            <View style={styles.cards}>
              <Text style={styles.items}>{item.Name}</Text>
              <Text style={styles.items}>{item.Pass}</Text>
              <Text style={styles.items}>{item.ConPass}</Text>
         <TouchableOpacity onPress={()=>{remove(index)}}> 
          <Text style={styles.del}>Delete</Text>
          </TouchableOpacity>
            </View>
          )}
        />
      </View>
     
    
    
      <View style={styles.btn}>
        <Btnlogin
          title="GO TO LOGIN PAGE"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
};
