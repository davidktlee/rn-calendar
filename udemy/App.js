import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { CategoriesScreen } from './screen/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MealsOverViewScreen } from './screen/MealsOverViewScreen'
import { MealItemDetailScreen } from './screen/MealItemDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FavoriteScreen } from './screen/FavoriteScreen'
import { IconBtn } from './components/IconBtn'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#3f1401' },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <IconBtn icon="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => <IconBtn icon="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView></SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="Drawer " // 화면 간 이동시 고유한 식별자
            component={DrawerNavigation} // 컴포넌트 이름만 등록
            options={{ headerShown: false }}
          />

          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealItemDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
