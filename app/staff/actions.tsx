import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, IconButton, Surface, Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StaffActionsScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [category, setCategory] = useState('All Products');

    const products = [
        {
            id: '1',
            title: 'Ultra-Gloss Floor Finish (1 Gallon)',
            category: 'Chemicals',
            price: '$38.25',
            listPrice: '$45.00',
            discount: '-15%',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz9Ff0DGyOwPAwnWLjWRu6o3GZnd7CQhBpo0M8MExE1KD2UuDCRupgSEVgwJO3VMHsXT5SZUKVhJ4XHfJ8RbhdoYibbqnvuxqXGxnQnXotM1_wYs_FM50Q2PD7R4qUFMmhIiv1yJFJJT714nUmR5c3tYGUKnh9bxdEZIF8L89hfPLEywyaN1agnb5YTvnXHlU7APgtv-taP1VvAKTu9W9yZ4HQjrlmTZwtigkfdeUwUZ60CJ_epbyJnqpe_uH1CH_un0KXj-cZAiM',
            stock: 'IN STOCK',
            stockColor: '#15803d',
            stockBg: '#dcfce7'
        },
        {
            id: '2',
            title: 'Multi-Fold Paper Towels (Case of 12)',
            category: 'Paper',
            price: '$27.20',
            listPrice: '$32.00',
            discount: '-15%',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDemwZBrYoR_V6N7W4ZIJDh56aJ8nW1xvZsmM5dKozjpaocBSwFnUSssswLW91E4K4b8yTSFNHSqMsckbhqG1XPVy5d4O4Ce7oDOWHimZjsZg_mDG36RBH4q12DtdQzIgL_PJkQy3t4Y1asDRbiB-BTnGS0vu5NZFYL9Q8sZFjY43rYBit0Tza4NBd0hHU4nSsacai3ov0pNm_EW_zlR8Y8FiBW0D-nwiMzG66PFHG_O7L8tS21XWO3zTHcFFzLfQI-KOTsTW1GAnQ',
            stock: 'LOW STOCK',
            stockColor: '#c2410c',
            stockBg: '#ffedd5'
        },
        // ... more mock data
    ];

    const categories = ['All Products', 'Chemicals', 'Janitorial Tools', 'Paper Products', 'Safety Gear'];

    return (
        <View style={{ flex: 1, backgroundColor: '#f6f7f8' }}>
            <StatusBar style="dark" />
            <Stack.Screen options={{ headerShown: false }} />
            
            {/* Header */}
            <SafeAreaView style={{ backgroundColor: '#fff', zIndex: 10 }}>
                <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? 40 : 0 }]}>
                    <TouchableOpacity onPress={() => router.replace('/')} style={styles.menuButton}>
                         <IconButton icon="menu" size={24} iconColor="#334155" />
                    </TouchableOpacity>
                    <Text style={styles.title}>POS Terminal</Text>
                    <Avatar.Image size={36} source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB32bnUOjGRF8-h8j4HweivQKNSX8jua_2Mdj9PNiKL1sZFT_XepF9XBeiRBraUM9uiGyeZvKO1HZ1exJBJsiJkJ0o6shaFUdn_SAKfkYQeadBB21Ika5NXirnShRtvfgGXA28skGpoi1L7NvUa3HJOmBjrQJAAoZ0GNYL9eTDPIFiWrQYu0MgwMwrojAz3ezol3m62Pn4jOLA8fB-pEshNjuVILaUxtmnjfoR5h1rYadzI0QSPJgksrsJg3o6QJn_QvdRdhCjn4w8' }} />
                </View>

                {/* Customer Info */}
                <View style={styles.customerInfo}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOGHDFa7ZQAckrdtHETprkhLRiUFUvmIeNSYGelrOrgVu-lmE5zEBLRh5ZXGWlYAtdRRbcVNduU8_TwZcHlxqxCsxvNC7ke9unjnLlHrnWuwTLQ9-n4V-oyHMD8q_-kOCQ3EWP789WfPrY5NkguV8FGjtoNRS5QIctHxI6PiMU32YXughgmPzp4iU5Zl9_LIenu7frF2SaeJouQ3qYxxReVhByJplaRCNYYX0peY69Y-ObbJCwxocxGP5D-WnLYxdSi_ZkqqTEb-U' }} style={styles.logo} />
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Acme Cleaning Services</Text>
                                <Text style={{ fontSize: 12, color: '#64748b' }}>ID: #8821 • Net 30</Text>
                            </View>
                        </View>
                        <TouchableOpacity><Text style={{ color: '#137fec', fontWeight: 'bold', fontSize: 12 }}>Change</Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
                         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fef3c7', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, gap: 4 }}>
                            <IconButton icon="star" size={14} iconColor="#b45309" style={{ margin: 0, width: 14, height: 14 }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#b45309' }}>GOLD PARTNER</Text>
                         </View>
                         <Text style={{ fontSize: 12, color: '#137fec', fontWeight: '500' }}>15% Discount Active</Text>
                    </View>
                </View>
            </SafeAreaView>

            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                 {/* Product Search */}
                <Surface style={styles.searchBar} elevation={1}>
                    <IconButton icon="magnify" size={20} iconColor="#94a3b8" />
                    <TextInput 
                        placeholder="Search SKU, Name..." 
                        style={styles.input}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        placeholderTextColor="#94a3b8"
                    />
                     <IconButton icon="qrcode-scan" size={20} iconColor="#94a3b8" />
                </Surface>

                 {/* Categories */}
                 <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 12 }}>
                    {categories.map(cat => (
                         <TouchableOpacity 
                            key={cat} 
                            style={[
                                styles.catChip, 
                                category === cat ? { backgroundColor: '#137fec' } : { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e8f0' }
                            ]}
                            onPress={() => setCategory(cat)}
                        >
                            <Text style={{ color: category === cat ? '#fff' : '#475569', fontWeight: '500' }}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                 </ScrollView>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Catalog</Text>
                    <Text style={{ fontSize: 12, color: '#64748b' }}>Showing 42 items</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                    {products.map(product => (
                        <Surface key={product.id} style={styles.productCard} elevation={1}>
                             <View style={styles.imageContainer}>
                                <Image source={{ uri: product.image }} style={styles.productImage} />
                                <View style={[styles.stockBadge, { backgroundColor: product.stockBg }]}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: product.stockColor }}>{product.stock}</Text>
                                </View>
                             </View>
                             <View style={styles.cardContent}>
                                <Text style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase' }}>{product.category}</Text>
                                <Text numberOfLines={2} style={styles.productTitle}>{product.title}</Text>
                                
                                <View style={{ marginTop: 'auto' }}>
                                    <Text style={{ fontSize: 12, color: '#94a3b8', textDecorationLine: 'line-through' }}>{product.listPrice} List</Text>
                                    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'baseline' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#137fec' }}>{product.price}</Text>
                                        <View style={{ backgroundColor: '#eff6ff', paddingHorizontal: 4, borderRadius: 4 }}>
                                            <Text style={{ fontSize: 10, color: '#137fec', fontWeight: '600' }}>{product.discount}</Text>
                                        </View>
                                    </View>
                                    <Button mode="contained" style={{ marginTop: 8, backgroundColor: '#eff6ff' }} textColor="#137fec" icon="cart-plus">Add</Button>
                                </View>
                             </View>
                        </Surface>
                    ))}
                </View>
            </ScrollView>

             {/* Bottom Checkout Panel */}
             <Surface style={[styles.checkoutPanel, { paddingBottom: insets.bottom + 16 }]} elevation={4}>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                     <View>
                        <Text style={{ fontSize: 12, color: '#64748b' }}>Current Transaction</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$58.64</Text>
                            <Text style={{ fontSize: 12, color: '#94a3b8' }}>(2 items)</Text>
                        </View>
                     </View>
                     <TouchableOpacity><Text style={{ color: '#137fec', fontWeight: 'bold' }}>View Details</Text></TouchableOpacity>
                 </View>
                 <Button mode="contained" buttonColor="#137fec" contentStyle={{ height: 48 }} icon="arrow-right">Checkout</Button>
             </Surface>

             {/* Scanner FAB */}
             <TouchableOpacity style={styles.fab}>
                <IconButton icon="barcode-scan" iconColor="#fff" size={28} />
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    menuButton: {
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    customerInfo: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        height: 48,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 48,
        fontSize: 16,
    },
    catChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        marginBottom: 12,
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#f8fafc',
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    stockBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    cardContent: {
        padding: 12,
        flex: 1,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        height: 40,
    },
    checkoutPanel: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
    },
    fab: {
        position: 'absolute',
        bottom: 150, // Above checkout panel
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    }
});
