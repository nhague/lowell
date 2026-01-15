import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, IconButton, Surface, Text, useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProductDetailsScreen() {
    const { id } = useLocalSearchParams();
    const theme = useTheme();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [quantity, setQuantity] = useState(1);
    
    // Mock Product Data (In a real app, fetch by ID)
    const product = {
        id: '1',
        title: 'Heavy Duty Degreaser',
        sku: '1029-X',
        size: '5 Gal Pail',
        price: '$45.00',
        originalPrice: '$52.00',
        description: 'High-performance industrial degreaser for tough grease and oil removal. Concentrated formula.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU0__0AuLIqSQwv05Q3HUD9YXZJR93NWf4QvxK0eklLqvj1Xsnrfk6K5T08IfqkjQd7soD8hBOAirbDg2l0zBEilrSOuLOAj7KsoWKuq4n4QQugIoeIyE8GPvVUvtmPb1BTdrUQMtsrg1SJb8czgUf8LmDt379Yw9M8eY17FB3aD-UQiPRGgInNolnu8OkeBipHseg0IMd1ZYHvkeiGrqKBjtvmv-cR4lmsNctgPluRh7dmIcfztoU2kbWaF79ULODxwf3DRhPtRo',
        badge: 'In Stock',
        yourPrice: true
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }} edges={['top', 'left', 'right']}>
            <StatusBar style="auto" backgroundColor={theme.colors.background} />
            <Stack.Screen options={{ headerShown: false }} />
            
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={[styles.header, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.outlineVariant }]}>
                    <IconButton icon="arrow-left" onPress={() => router.back()} />
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Catalog</Text>
                    <View style={{ position: 'relative' }}>
                        <IconButton icon="cart-outline" onPress={() => {}} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                     {/* Image Section */}
                    <Surface style={[styles.imageContainer, { backgroundColor: theme.colors.surface }]} elevation={0}>
                        <View style={styles.imageWrapper}>
                             <Image 
                                source={product.image} 
                                style={styles.image} 
                                contentFit="contain" 
                            />
                        </View>
                    </Surface>

                    <View style={styles.detailsContainer}>
                        <View>
                            <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>{product.title}</Text>
                            <View style={styles.skuRow}>
                                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>SKU: {product.sku}</Text>
                                <View style={[styles.dot, { backgroundColor: theme.colors.outline }]} />
                                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>{product.size}</Text>
                            </View>
                        </View>

                        <View style={styles.priceRow}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
                                    <Text variant="headlineMedium" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{product.price}</Text>
                                    <Text variant="titleMedium" style={{ textDecorationLine: 'line-through', color: theme.colors.onSurfaceVariant }}>{product.originalPrice}</Text>
                                </View>
                                {product.yourPrice && (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                                        <IconButton icon="check-circle" size={16} iconColor="#16a34a" style={{ margin: 0, width: 16, height: 16 }} />
                                        <Text style={{ fontSize: 12, color: '#16a34a', fontWeight: 'bold' }}>Your Price</Text>
                                    </View>
                                )}
                            </View>
                            <View style={[styles.stockBadge, { backgroundColor: '#f0fdf4' }]}>
                                <View style={[styles.pulseDot, { backgroundColor: '#22c55e' }]} />
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#15803d' }}>{product.badge}</Text>
                            </View>
                        </View>

                        <Divider style={{ marginVertical: 16 }} />

                        <View>
                            <Text variant="labelLarge" style={{ color: theme.colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase' }}>Description</Text>
                            <Text variant="bodyLarge" style={{ color: theme.colors.onSurfaceVariant, lineHeight: 24 }}>
                                {product.description}
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Sticky Footer */}
                <Surface style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.outlineVariant, paddingBottom: insets.bottom + 16 }]} elevation={4}>
                    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                         {/* Quantity Control */}
                        <View style={[styles.qtyControl, { borderColor: theme.colors.outlineVariant }]}>
                            <IconButton 
                                icon="minus" 
                                size={20} 
                                disabled={quantity <= 1}
                                onPress={() => setQuantity(q => Math.max(1, q - 1))}
                            />
                            <Text variant="titleMedium" style={{ fontWeight: 'bold', minWidth: 24, textAlign: 'center' }}>{quantity}</Text>
                            <IconButton 
                                icon="plus" 
                                size={20} 
                                onPress={() => setQuantity(q => q + 1)}
                            />
                        </View>

                        {/* Add to Cart Button */}
                        <Button 
                            mode="contained" 
                            onPress={() => {}} 
                            style={{ flex: 1, borderRadius: 12 }}
                            contentStyle={{ height: 56 }}
                            labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                        >
                            Add to Cart
                        </Button>
                    </View>
                </Surface>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8, // Icon buttons have internal padding
        height: 56,
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
        zIndex: 1,
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1, // Square as per mock
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e2e8f0',
    },
    imageWrapper: {
        width: '70%',
        height: '70%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        padding: 20,
        gap: 24,
    },
    skuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    stockBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    pulseDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    footer: {
        padding: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    qtyControl: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        height: 56,
        backgroundColor: 'transparent',
    }
});
