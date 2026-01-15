import { MaterialCommunityIcons } from '@expo/vector-icons'; // Or use proper icon set
import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.outlineVariant,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catalog',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused ? 'view-grid' : 'view-grid-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="invoices"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused ? 'office-building' : 'office-building-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused ? 'account' : 'account-outline'} color={color} />,
        }}
      />
    </Tabs>
  );
}
