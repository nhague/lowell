import ScreenWrapper from '@/components/ScreenWrapper';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Chip, IconButton, Searchbar, Surface, Text, useTheme } from 'react-native-paper';

// Mock Data
const PRODUCTS = [
    {
        id: '1',
        title: 'Heavy Duty Degreaser',
        sku: '1029-X',
        size: '5 Gal Pail',
        price: '$45.00',
        originalPrice: '$52.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU0__0AuLIqSQwv05Q3HUD9YXZJR93NWf4QvxK0eklLqvj1Xsnrfk6K5T08IfqkjQd7soD8hBOAirbDg2l0zBEilrSOuLOAj7KsoWKuq4n4QQugIoeIyE8GPvVUvtmPb1BTdrUQMtsrg1SJb8czgUf8LmDt379Yw9M8eY17FB3aD-UQiPRGgInNolnu8OkeBipHseg0IMd1ZYHvkeiGrqKBjtvmv-cR4lmsNctgPluRh7dmIcfztoU2kbWaF79ULODxwf3DRhPtRo',
        badge: 'Pickup',
        yourPrice: true
    },
    {
        id: '2',
        title: 'Jumbo Roll Toilet Tissue',
        sku: '8821-A',
        size: 'Case of 12',
        price: '$32.50',
        originalPrice: '$38.99',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBceAthzJja5lpG-99h3JRaHvQDHWV1cMYzaoYQtn1BjgplKGLigsZp2b8jXZ5hdH5f8HYrU4-7A6gahGr18tobD4m133I_x9Sf5fk85B9SXTy9A1BCBK-6aBQ8Pux7t2vglbnQLYUGmz-r3nIqa_1ud1sJz6i7k2U1gnzFNjnoLMXz-_jiOGglRrBnHwpMNyQR-YaOi_CH5fCjOgB-GSONaTsiMnTif5A01FjI4FGnOsX7Y3Htp0CELnKFDs4kilS2_bNtv8Lm0v0',
        badge: 'Pickup',
        yourPrice: true,
        inCart: 1
    },
    {
        id: '3',
        title: 'Nitrile Exam Gloves',
        sku: '7712-M',
        size: 'Box of 100 (Medium)',
        price: '$12.95',
        originalPrice: '$15.50',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_gIwkXOZ6R0vsP3hfoOadjRXQzmR3UVI-qeh-L6wTROW5XFEyTEEtSQ1Uqcxw6dl_RbDFWF6eZgTtfbJ7Xxp3jLEi6XgWec_TkSyMcGh7jqAgU3d9LL4uguf7itohTYxebiR994fOq2GTcCwvaY8L9Y7nVqCsKKvzT0pOq5E3eP_G4Ynh__Ty2eiu_wqQfLvHdN4HIsORdjnADVLTNxNYBy-i3a1XbICTBVovM95xF8TgweV2BcwNWAvFGlfeivDsWHtTMvoWM0',
        yourPrice: true
    },
    {
        id: '4',
        title: 'Auto-Scrubber 20"',
        sku: 'ASC-2000',
        size: 'Each',
        price: '$2,450.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlWxS7EW8PZWZfa22GkqWWb9NU6evyHv3OrdqX-rEyoi6YC9_lw6yVMRPNPvWx8cu-PDscyLASU3t3p3bpmuSmwyUEeBNLs9Z8SmjgPjcom5IUyML93vmpVyJOi1BaKzv7UeB1oTjzNrDNuVXWcwkTgcbnMib3WMyCVAj7xAqrJhvaJ4xSUG4OSp8eFIPFlO-3vwwStOboJAUoa1loaHEzEM3Mt_Hh6cCRKrSWH4aH5c2Xa5di5sfNnV3NmfQ8AYaMYkMfIv9jqD4',
        lowStock: true,
        badge: 'Pickup'
    }
];

const CATEGORIES = [
    { label: 'All Categories', value: 'all' },
    { label: 'Chemicals', value: 'chemicals' },
    { label: 'Paper', value: 'paper' },
    { label: 'Tools', value: 'tools' },
];

export default function CatalogScreen() {
    const theme = useTheme();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <ScreenWrapper>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.outlineVariant }]}>
                <View style={{ width: 40 }} />
                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Catalog</Text>
                <View style={{ width: 40, alignItems: 'flex-end' }}>
                     <View>
                        <IconButton icon="cart-outline" size={24} onPress={() => {}} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                     </View>
                </View>
            </View>

            {/* Search */}
            <View style={{ padding: 16 }}>
                <Searchbar
                    placeholder="Search by SKU, Name, or Brand..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{ backgroundColor: theme.colors.surface }}
                    elevation={1}
                />
            </View>

            {/* Categories */}
            <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
                    {CATEGORIES.map(cat => (
                        <Chip
                            key={cat.value}
                            selected={selectedCategory === cat.value}
                            onPress={() => setSelectedCategory(cat.value)}
                            showSelectedOverlay
                        >
                            {cat.label}
                        </Chip>
                    ))}
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Buy Again</Text>
                    <Button onPress={() => {}}>View All</Button>
                </View>
                
                 {/* Reusing Horizontal List logic but here we follow prototype which shows horizontal list then vertical list. 
                    Prototype actually has Buy Again horizontal, then product list below. 
                    Let's just show Product List for now as the main content based on prototype logic.
                 */}

                <View style={{ gap: 16 }}>
                    {PRODUCTS.map(product => (
                        <Surface key={product.id} style={[styles.productRow, { backgroundColor: theme.colors.surface }]} elevation={1} onTouchEnd={() => router.push('/product/1')}>
                            <View style={styles.productImageContainer}>
                                <Image source={typeof product.image === 'string' ? { uri: product.image } : product.image} style={styles.productImage} />
                                {product.badge && (
                                    <View style={[styles.pickupBadge, { backgroundColor: '#dcfce7' }]}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#15803d' }}>{product.badge}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 4 }}>
                                <View>
                                    <Text variant="titleSmall" numberOfLines={1} style={{fontWeight: '600'}}>{product.title}</Text>
                                    <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>SKU: {product.sku}</Text>
                                    <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>{product.size}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 8 }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}>
                                            <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{product.price}</Text>
                                            {product.originalPrice && (
                                                <Text variant="bodySmall" style={{ textDecorationLine: 'line-through', color: theme.colors.onSurfaceVariant }}>{product.originalPrice}</Text>
                                            )}
                                        </View>
                                        {product.yourPrice && (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                                <IconButton icon="check-circle" size={12} iconColor="#16a34a" style={{ margin: 0, width: 14, height: 14 }} />
                                                <Text style={{ fontSize: 10, color: '#16a34a', fontWeight: '500' }}>Your Price</Text>
                                            </View>
                                        )}
                                        {product.lowStock && (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                                 <IconButton icon="alert" size={12} iconColor="#ea580c" style={{ margin: 0, width: 14, height: 14 }} />
                                                 <Text style={{ fontSize: 10, color: '#ea580c', fontWeight: '500' }}>Low Stock</Text>
                                            </View>
                                        )}
                                    </View>
                                    
                                    {product.inCart ? (
                                         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.secondaryContainer, borderRadius: 8 }}>
                                            <IconButton icon="minus" size={16} onPress={() => {}} style={{ margin: 0 }} />
                                            <Text style={{ fontWeight: '600' }}>{product.inCart}</Text>
                                            <IconButton icon="plus" size={16} onPress={() => {}} style={{ margin: 0 }} />
                                         </View>
                                    ) : (
                                        <IconButton
                                            icon="plus"
                                            mode="contained"
                                            containerColor={theme.colors.primaryContainer}
                                            iconColor={theme.colors.primary}
                                            size={20}
                                            onPress={() => {}}
                                            style={{ margin: 0, borderRadius: 8 }}
                                        />
                                    )}
                                </View>
                            </View>
                        </Surface>
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
        borderBottomWidth: StyleSheet.hairlineWidth,
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
    productRow: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 12,
        gap: 16,
    },
    productImageContainer: {
        width: 96,
        height: 96,
        borderRadius: 8,
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
    },
    productImage: {
        width: '100%',
        height: '100%'
    },
    pickupBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderBottomLeftRadius: 8,
    }
});
