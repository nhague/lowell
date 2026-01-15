import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Chip, FAB, Searchbar, Surface, Text, useTheme } from 'react-native-paper';

// Mock Data
const INVOICES = [
    {
        id: '1',
        number: '#INV-2023-001',
        date: 'Oct 24, 2023',
        status: 'Due',
        items: 45,
        method: 'Store Pickup',
        total: '$3,450.00',
        due: true
    },
    {
        id: '2',
        number: '#INV-2023-002',
        date: 'Sept 12, 2023',
        status: 'Paid',
        items: 120,
        method: 'Delivery',
        total: '$8,200.50',
        paid: true
    },
    {
        id: '3',
        number: '#INV-2023-089',
        date: 'Aug 05, 2023',
        status: 'Pickup Ready',
        items: 12,
        method: 'Store Pickup',
        total: '$1,420.00',
        pickup: true
    },
    {
        id: '4',
        number: '#INV-2023-045',
        date: 'Jun 22, 2023',
        status: 'Paid',
        items: 230,
        method: 'Delivery',
        total: '$15,600.00',
        paid: true
    }
];

const FILTERS = ['All', 'Due', 'Paid', 'Pickup Ready'];

export default function InvoicesScreen() {
    const theme = useTheme();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');

    return (
        <ScreenWrapper>
             {/* Header */}
             <Surface style={[styles.header, { backgroundColor: theme.colors.surface }]} elevation={1}>
                <View style={{ height: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Accounts</Text>
                </View>
                <View style={{ padding: 16, paddingTop: 0 }}>
                    <Searchbar
                         placeholder="Search invoice # or date"
                         onChangeText={setSearchQuery}
                         value={searchQuery}
                         style={{ backgroundColor: theme.colors.surfaceVariant }}
                         elevation={0}
                    />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16, gap: 8 }}>
                    {FILTERS.map(f => (
                        <Chip
                            key={f}
                            selected={filter === f}
                            onPress={() => setFilter(f)}
                            showSelectedOverlay
                            style={{ backgroundColor: filter === f ? theme.colors.inverseSurface : theme.colors.surface }}
                            textStyle={{ color: filter === f ? theme.colors.inverseOnSurface : theme.colors.onSurface }}
                            mode="outlined"
                        >
                            {f}
                        </Chip>
                    ))}
                </ScrollView>
             </Surface>

             <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <View style={{ gap: 16 }}>
                    {INVOICES.map(invoice => (
                        <TouchableOpacity key={invoice.id} activeOpacity={0.9} onPress={() => router.push(`/invoices/${invoice.id}`)}>
                            <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={1}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <View>
                                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{invoice.number}</Text>
                                        <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>{invoice.date}</Text>
                                    </View>
                                    <View style={[
                                        styles.statusBadge,
                                        invoice.due && { backgroundColor: theme.colors.errorContainer },
                                        invoice.paid && { backgroundColor: '#dcfce7' }, // green-100
                                        invoice.pickup && { backgroundColor: theme.colors.primaryContainer }
                                    ]}>
                                        <Text style={[
                                            styles.statusText,
                                            invoice.due && { color: theme.colors.error },
                                            invoice.paid && { color: '#15803d' }, // green-700
                                            invoice.pickup && { color: theme.colors.primary }
                                        ]}>
                                            {invoice.status}
                                        </Text>
                                    </View>
                                </View>

                                <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                         {/* Using simple text for icons if needed or MaterialCommunityIcons */}
                                         <Text style={{ color: theme.colors.onSurfaceVariant }}>📦</Text>
                                         <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>{invoice.items} Items</Text>
                                    </View>
                                    <View style={{ width: 1, height: 16, backgroundColor: theme.colors.outlineVariant }} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                         <Text style={{ color: theme.colors.primary }}>🚚</Text>
                                         <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>{invoice.method}</Text>
                                    </View>
                                </View>

                                <View style={{ marginTop: 16 }}>
                                     <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Total Amount</Text>
                                     <Text variant="headlineSmall" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{invoice.total}</Text>
                                </View>
                            </Surface>
                        </TouchableOpacity>
                    ))}
                </View>
             </ScrollView>

            <FAB
                icon="credit-card"
                label="Pay Outstanding ($3,450)"
                style={[styles.fab, { backgroundColor: theme.colors.onSurface }]}
                color={theme.colors.surface}
                onPress={() => console.log('Pay')}
            />
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginBottom: 8,
    },
    card: {
        borderRadius: 16,
        padding: 20,
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    divider: {
        height: 1,
        marginVertical: 12,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 50,
    },
})
