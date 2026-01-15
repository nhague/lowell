import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, FAB, IconButton, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StaffDashboardScreen() {
    const theme = useTheme();
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const orders = [
        { id: '#ORD-2094', client: 'CleanCo Services', status: 'Processing', items: 15, total: '$452.20', color: '#3b82f6', statusBg: '#eff6ff' },
        { id: '#ORD-2103', client: 'Sparkle Janitorial', status: 'Ready', items: 4, total: '$120.50', color: '#10b981', statusBg: '#ecfdf5' },
        { id: '#ORD-2088', client: 'City School District', status: 'Pending', items: 120, total: '$2,105.00', color: '#f97316', statusBg: '#fff7ed' },
    ];

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
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Staff Ops</Text>
                    </View>
                    <Avatar.Image size={36} source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB32bnUOjGRF8-h8j4HweivQKNSX8jua_2Mdj9PNiKL1sZFT_XepF9XBeiRBraUM9uiGyeZvKO1HZ1exJBJsiJkJ0o6shaFUdn_SAKfkYQeadBB21Ika5NXirnShRtvfgGXA28skGpoi1L7NvUa3HJOmBjrQJAAoZ0GNYL9eTDPIFiWrQYu0MgwMwrojAz3ezol3m62Pn4jOLA8fB-pEshNjuVILaUxtmnjfoR5h1rYadzI0QSPJgksrsJg3o6QJn_QvdRdhCjn4w8' }} />
                </View>
                <View style={styles.searchContainer}>
                    <Surface style={styles.searchBar} elevation={1}>
                        <IconButton icon="magnify" size={20} iconColor="#94a3b8" />
                        <TextInput 
                            placeholder="Search products, orders, customers..." 
                            style={styles.input}
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            placeholderTextColor="#94a3b8"
                        />
                    </Surface>
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}>
                        <Button mode="contained" icon="barcode-scan" buttonColor="#137fec" textColor="#fff" style={styles.chip}>Scan</Button>
                        <Button mode="outlined" icon="plus-circle" textColor="#334155" style={[styles.chip, { backgroundColor: '#fff', borderColor: '#e2e8f0' }]}>New Walk-in</Button>
                        <Button mode="outlined" icon="account-search" textColor="#334155" style={[styles.chip, { backgroundColor: '#fff', borderColor: '#e2e8f0' }]}>Lookup</Button>
                        <Button mode="outlined" icon="package-variant" textColor="#334155" style={[styles.chip, { backgroundColor: '#fff', borderColor: '#e2e8f0' }]}>Stock</Button>
                    </ScrollView>
                </View>

                {/* KPI Stats */}
                <View style={styles.kpiContainer}>
                    <Surface style={styles.kpiCard} elevation={1}>
                        <Text style={styles.kpiLabel}>PROCESSING</Text>
                        <View style={styles.kpiValueRow}>
                            <Text style={styles.kpiValue}>12</Text>
                            <View style={[styles.kpiBadge, { backgroundColor: '#fff7ed' }]}>
                                <Text style={{ color: '#f97316', fontSize: 10, fontWeight: '600' }}>Orders</Text>
                            </View>
                        </View>
                    </Surface>
                    <Surface style={styles.kpiCard} elevation={1}>
                        <Text style={styles.kpiLabel}>TODAY'S SALES</Text>
                        <View style={styles.kpiValueRow}>
                            <Text style={styles.kpiValue}>$4.5k</Text>
                            <View style={[styles.kpiBadge, { backgroundColor: '#ecfdf5' }]}>
                                <Text style={{ color: '#10b981', fontSize: 10, fontWeight: '600' }}>+12%</Text>
                            </View>
                        </View>
                    </Surface>
                </View>

                {/* Active Orders */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Active Orders</Text>
                        <TouchableOpacity><Text style={{ color: '#137fec', fontWeight: '600' }}>See All</Text></TouchableOpacity>
                    </View>
                    
                    <View style={{ gap: 12 }}>
                        {orders.map((order, index) => (
                            <Surface key={index} style={styles.orderCard} elevation={1}>
                                <View style={styles.orderHeader}>
                                    <View style={styles.orderIdBadge}><Text style={styles.orderIdText}>{order.id}</Text></View>
                                    <View style={[styles.orderStatusBadge, { backgroundColor: order.statusBg }]}>
                                        <View style={[styles.statusDot, { backgroundColor: order.color }]} />
                                        <Text style={[styles.orderStatusText, { color: order.color }]}>{order.status}</Text>
                                    </View>
                                </View>
                                <Text style={styles.clientName}>{order.client}</Text>
                                <View style={styles.orderDetailsRow}>
                                    <View style={styles.detailItem}><IconButton icon="truck-delivery" size={14} style={{width:14, height:14, margin:0}} /><Text style={styles.detailText}>Delivery</Text></View>
                                    <View style={styles.detailItem}><IconButton icon="package-variant" size={14} style={{width:14, height:14, margin:0}} /><Text style={styles.detailText}>{order.items} items</Text></View>
                                </View>
                                <View style={styles.orderFooter}>
                                    <Text style={styles.orderTotal}>{order.total}</Text>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#137fec', fontWeight: '600', fontSize: 14 }}>View Details</Text>
                                        <IconButton icon="arrow-right" size={16} iconColor="#137fec" style={{ margin: 0 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.leftBorder, { backgroundColor: order.color }]} />
                            </Surface>
                        ))}
                    </View>
                </View>

                {/* Recent Activity */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>Recent Activity</Text>
                    <Surface style={styles.activityCard} elevation={1}>
                         {/* Activity Items would go here, hardcoded for now */}
                         <View style={styles.activityItem}>
                            <View style={[styles.activityIcon, { backgroundColor: '#d1fae5' }]}><IconButton icon="cash" size={14} iconColor="#059669" /></View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.activityTitle}>Payment Received</Text>
                                <Text style={styles.activitySubtitle}>From EcoClean Inc. ($120.00)</Text>
                            </View>
                            <Text style={styles.activityTime}>2m ago</Text>
                         </View>
                         <View style={styles.activityItem}>
                            <View style={[styles.activityIcon, { backgroundColor: '#dbeafe' }]}><IconButton icon="cart" size={14} iconColor="#2563eb" /></View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.activityTitle}>New Order #2104</Text>
                                <Text style={styles.activitySubtitle}>Office Supplies Bundle</Text>
                            </View>
                            <Text style={styles.activityTime}>15m ago</Text>
                         </View>
                    </Surface>
                </View>

            </ScrollView>

            {/* Bottom Nav */}
            <Surface style={[styles.bottomNav, { paddingBottom: insets.bottom }]} elevation={5}>
                <View style={styles.navItem}>
                    <IconButton icon="view-dashboard" iconColor="#137fec" size={24} />
                    <Text style={{ color: '#137fec', fontSize: 10, fontWeight: '600' }}>Home</Text>
                </View>
                <View style={styles.navItem}>
                    <IconButton icon="clipboard-list" iconColor="#94a3b8" size={24} />
                    <Text style={{ color: '#94a3b8', fontSize: 10, fontWeight: '600' }}>Orders</Text>
                </View>
                <View style={{ width: 60 }} />
                <View style={styles.navItem}>
                    <IconButton icon="package-variant" iconColor="#94a3b8" size={24} />
                    <Text style={{ color: '#94a3b8', fontSize: 10, fontWeight: '600' }}>Stock</Text>
                </View>
                <View style={styles.navItem}>
                    <IconButton icon="bell-outline" iconColor="#94a3b8" size={24} />
                    <Text style={{ color: '#94a3b8', fontSize: 10, fontWeight: '600' }}>Alerts</Text>
                </View>


                <FAB
                    icon="point-of-sale"
                    color="#fff"
                    style={styles.fab}
                    onPress={() => router.push('/staff/actions')}
                />
            </Surface>
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
        marginRight: 8,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        height: 44,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 44,
        fontSize: 14,
    },
    quickActions: {
        paddingVertical: 16,
    },
    chip: {
        borderRadius: 20,
        marginRight: 8,
    },
    kpiContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        gap: 12,
        marginBottom: 24,
    },
    kpiCard: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    kpiLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#64748b',
        marginBottom: 4,
        letterSpacing: 0.5,
    },
    kpiValueRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    kpiValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    kpiBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    section: {
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f1f5f9',
        overflow: 'hidden',
        padding: 16,
    },
    leftBorder: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    orderIdBadge: {
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    orderIdText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#475569',
    },
    orderStatusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 6,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    orderStatusText: {
        fontSize: 12,
        fontWeight: '600',
    },
    clientName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 4,
    },
    orderDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    detailText: {
        fontSize: 12,
        color: '#64748b',
    },
    orderFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
        paddingTop: 12,
    },
    orderTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    activityCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    activityItem: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        gap: 12,
    },
    activityIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityTitle: {
        fontWeight: '600',
        color: '#0f172a',
        fontSize: 14,
    },
    activitySubtitle: {
        fontSize: 12,
        color: '#64748b',
    },
    activityTime: {
        fontSize: 12,
        color: '#94a3b8',
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 64, // Base height before safe area
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    fab: {
        position: 'absolute',
        bottom: 30, // Lifted up
        left: '50%',
        marginLeft: -28, // Half width
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#137fec',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#137fec',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    }
});
