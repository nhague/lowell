import ProductCard from '@/components/ProductCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';

// Mock Data from Prototype
const BUY_AGAIN_ITEMS = [
  {
    id: '1',
    title: 'Heavy Duty Degreaser 5L',
    price: '$38.50',
    originalPrice: '$45.00',
    lastOrdered: 'Oct 12',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2EaaWKiOfd5EUktgRJPvmYwx7h4G7MeK4ma8MGj7Jc0isP4cTSNrpf_Jv_HwvgkpuvRrCwOs3CJ1CA7mEunwh5rtsiqDtf9tOkX9-PRamhA7UQwoETb2FQZduWKQvcNTV8vSStYBOAzU0coZMOvN8c_Ly6Ex4XhuHua6hoDVeKvqXjMcOab1FWDJK8hJtGJgLltTba5ysfNDUULsbjnzXlkmkvlciYuVJwMv8FGBdpYdOKNa1biKs4L77uJ3qAo0Z7hTbhSbuQtc',
    badge: 'SAVE 15%',
  },
  {
    id: '2',
    title: 'Jumbo Roll Tissue (12pk)',
    price: '$28.00',
    originalPrice: '$32.00',
    lastOrdered: 'Oct 01',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe3AXcHbdYIqPaMfF7OzUONR7T9GgBUsROXw7kyx3KWFvU2s630kM_IyRwCIaubG-JKLGnoBr2iOPo3ZfUpjv7qUyK0iDqTsduwOXm3kQ2XdwNNuN1Qsvn6t4uLfWxkk8z8YqanbQmpfvFjxQOkgQEQi5N1oaKhv6vBqvr8y67NkSaQn1yXgDyCR6yJAqTLfuoA9r8cOV5sxmHs121hpH_ZPJfVoVt1HyR_qx9eYZ8V1w6lDugv62cqWOKwvsdUQpCWGhbTKQRPrA',
    badge: 'SAVE 12%',
  },
  {
    id: '3',
    title: 'Nitrile Gloves Large (100)',
    price: '$14.95',
    originalPrice: '$18.50',
    lastOrdered: 'Sep 28',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWfpV3NbzS-ed94L4CvBX8FvbeFJmJ-djCUMxeT34ZIGaaUnBWPqusHEmH9iFyD4ynA-W0IWCFXhYRdoUlrxQiW1QXrraZBHYHG26mZOPOOtnDSPyccLqpE2zQaaJOcm-N4vVDWhEhAD6a5rWeMtuU0GwTfsr7rPhOysnhN2avIGR_lya3USuY_ClypdrM1hEPZtslVdCyEzDsAMWEayjlVFFX1Tx1Old__0hFfTANJ8eBcTXsGF0wTx3wosFILItPBhusrWckZIQ',
  },
];

const QUICK_CATEGORIES = [
  { id: '1', name: 'Chemicals', icon: 'bottle-tonic-plus', color: '#eff6ff', iconColor: '#137fec' }, // blue-50, primary
  { id: '2', name: 'Paper Products', icon: 'paper-roll', color: '#fff7ed', iconColor: '#f97316' }, // orange-50, orange-500
  { id: '3', name: 'Trash Liners', icon: 'delete', color: '#f1f5f9', iconColor: '#475569' }, // slate-100, slate-600
  { id: '4', name: 'Mops & Brooms', icon: 'broom', color: '#f0fdfa', iconColor: '#0d9488' }, // teal-50, teal-600
  { id: '5', name: 'Equipment', icon: 'tools', color: '#f9fafb', iconColor: '#4b5563' }, // gray-50, gray-600
  { id: '6', name: 'Breakroom', icon: 'coffee', color: '#fffbeb', iconColor: '#d97706' }, // amber-50, amber-600
];

export default function Dashboard() {
  const theme = useTheme();
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Helper to render category item
  const renderCategory = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}
      activeOpacity={0.7}
      onPress={() => router.push('/catalog')}
    >
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <IconButton
          icon={item.icon}
          iconColor={item.iconColor}
          size={32}
          onPress={() => router.push('/catalog')}
        />
      </View>
      <Text variant="labelLarge" style={{ textAlign: 'center', marginTop: 8 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
       {/* Custom Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <View>
          <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Oct 24, Tuesday</Text>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Good morning, John</Text>
        </View>
        <View style={styles.cartContainer}>
          <IconButton
            icon="cart-outline"
            size={24}
            onPress={() => {}}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.sectionPadding}>
          <Text variant="headlineMedium" style={{ fontWeight: '800', marginBottom: 24 }}>Welcome back!</Text>
        </View>

        {/* Buy Again Section */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Buy Again</Text>
          <TouchableOpacity onPress={() => router.push('/catalog')}>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text variant="labelLarge" style={{ color: theme.colors.primary }}>See all</Text>
                <IconButton icon="chevron-right" size={16} iconColor={theme.colors.primary} style={{margin: 0}} />
             </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {BUY_AGAIN_ITEMS.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onAdd={() => {}}
            />
          ))}
        </ScrollView>

        {/* Quick Categories */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Quick Order Categories</Text>
        </View>
        
        <View style={styles.gridContainer}>
             {QUICK_CATEGORIES.map((item) => (
                 <View key={item.id} style={{width: (width - 48 ) / 2, marginBottom: 12}}>
                     {renderCategory({item})}
                 </View>
             ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#dc2626',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  sectionPadding: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  horizontalList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  categoryCard: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 140, // Fixed height for uniformity
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
