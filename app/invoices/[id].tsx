import ScreenWrapper from '@/components/ScreenWrapper';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, IconButton, Surface, Text, useTheme } from 'react-native-paper';

export default function InvoiceDetailsScreen() {
    const { id } = useLocalSearchParams();
    const theme = useTheme();
    const router = useRouter();

    return (
        <ScreenWrapper>
             {/* Header */}
            <View style={[styles.header, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.outlineVariant }]}>
                <IconButton icon="arrow-left" onPress={() => router.back()} />
                <Text variant="titleMedium" style={{ fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 48 }}>Invoice Details</Text>
                <IconButton icon="share-variant-outline" iconColor={theme.colors.primary} style={{ position: 'absolute', right: 8 }} onPress={() => {}} />
            </View>

            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
                {/* Company Info */}
                <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                             <View style={[styles.logoContainer, { borderColor: theme.colors.outlineVariant }]}>
                                 <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#2563eb', justifyContent: 'center', alignItems: 'center' }}>
                                     <Text style={{ fontSize: 20 }}>✨</Text>
                                 </View>
                             </View>
                             <View>
                                 <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>CleanCo Wholesale</Text>
                                 <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>Janitorial Supplies</Text>
                             </View>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: theme.colors.errorContainer }]}>
                            <Text style={[styles.statusText, { color: theme.colors.error }]}>DUE</Text>
                        </View>
                    </View>

                    <Divider style={{ marginVertical: 16 }} />

                    <View style={styles.grid}>
                        <View style={styles.gridItem}>
                            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Invoice Number</Text>
                            <Text variant="titleSmall" style={{ fontWeight: 'bold' }}>#INV-2023-001</Text>
                        </View>
                        <View style={[styles.gridItem, { alignItems: 'flex-end' }]}>
                             <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Issued Date</Text>
                             <Text variant="titleSmall">Oct 24, 2023</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Payment Terms</Text>
                            <Text variant="titleSmall">Net 30</Text>
                        </View>
                        <View style={[styles.gridItem, { alignItems: 'flex-end' }]}>
                             <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Due Date</Text>
                             <Text variant="titleSmall" style={{ color: theme.colors.error, fontWeight: 'bold' }}>Nov 23, 2023</Text>
                        </View>
                    </View>
                </Surface>

                <Text variant="titleMedium" style={{ fontWeight: 'bold', marginVertical: 12, marginLeft: 4 }}>Customer & Delivery</Text>
                
                <View style={styles.row}>
                    <Surface style={[styles.halfCard, { backgroundColor: theme.colors.surface }]} elevation={1}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 }}>
                            <Text style={{ color: theme.colors.primary }}>📄</Text>
                            <Text variant="labelSmall" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>BILL TO</Text>
                        </View>
                        <Text variant="titleSmall" style={{ fontWeight: '600' }}>Acme Facility Services</Text>
                        <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, marginTop: 4 }}>123 Biz Rd, Suite 400{'\n'}San Francisco, CA 94107</Text>
                    </Surface>
                    
                    <Surface style={[styles.halfCard, { backgroundColor: theme.colors.surface }]} elevation={1}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <Text style={{ color: theme.colors.primary }}>🏪</Text>
                                <Text variant="labelSmall" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>PICKUP LOC</Text>
                             </View>
                             <View style={{ backgroundColor: '#dcfce7', paddingHorizontal: 6, borderRadius: 8 }}>
                                 <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#15803d' }}>READY</Text>
                             </View>
                        </View>
                        <Text variant="titleSmall" style={{ fontWeight: '600' }}>Lowell Janitorial</Text>
                        <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, marginTop: 4 }}>123 Market St{'\n'}Boston, MA 02110</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 4 }}>
                            <Text variant="labelMedium" style={{ color: theme.colors.primary, fontWeight: '500' }}>Get Directions</Text>
                            <Text style={{ color: theme.colors.primary, fontSize: 12 }}>→</Text>
                        </View>
                    </Surface>
                </View>

                <Text variant="titleMedium" style={{ fontWeight: 'bold', marginVertical: 12, marginLeft: 4 }}>Line Items (3)</Text>

                <View style={{ gap: 12 }}>
                    {[
                        { name: 'Heavy Duty Floor Wax (5 Gal)', sku: 'WAX-500-HD', price: '$405.00', qty: 10, unit: '$45.00', disc: '-10% Bulk Disc.' },
                        { name: 'Microfiber Mop Heads (Blue)', sku: 'MOP-MF-BLU', price: '$200.00', qty: 50, unit: '$4.00' },
                        { name: 'Heavy Duty Floor Scrubber', sku: 'EQ-HDF-99', price: '$405.00', qty: 1, unit: '$405.00' }
                    ].map((item, index) => (
                        <Surface key={index} style={[styles.lineItemCard, { backgroundColor: theme.colors.surface }]} elevation={1}>
                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                 <View style={{ flex: 1 }}>
                                     <Text variant="bodyMedium" style={{ fontWeight: '600' }}>{item.name}</Text>
                                     <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>SKU: {item.sku}</Text>
                                 </View>
                                 <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.price}</Text>
                             </View>
                             
                             <Divider style={{ marginVertical: 12, borderStyle: 'dashed' }} /> {/* Note: Divider doesn't support dashed easily, but we can't style it so easily here without custom component. */}

                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                 <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                                    <Text style={{ fontWeight: '600', color: theme.colors.onSurface }}>{item.qty}</Text> x {item.unit}
                                 </Text>
                                 {item.disc && (
                                     <View style={{ backgroundColor: '#f0fdf4', paddingHorizontal: 6, py: 2, borderRadius: 4 }}>
                                         <Text style={{ fontSize: 10, color: '#16a34a', fontWeight: '600' }}>{item.disc}</Text>
                                     </View>
                                 )}
                             </View>
                        </Surface>
                    ))}
                </View>

                <Surface style={[styles.summaryCard, { backgroundColor: theme.colors.surface }]} elevation={1}>
                    <View style={styles.summaryRow}>
                        <Text style={{ color: theme.colors.onSurfaceVariant }}>Subtotal</Text>
                        <Text style={{ fontWeight: '600' }}>$1,010.00</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={{ color: theme.colors.onSurfaceVariant }}>Tax (8.5%)</Text>
                        <Text style={{ fontWeight: '600' }}>$85.85</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={{ color: theme.colors.onSurfaceVariant }}>Shipping</Text>
                        <Text style={{ fontWeight: '600', color: '#16a34a' }}>Free (Pickup)</Text>
                    </View>
                    <Divider style={{ marginVertical: 12 }} />
                    <View style={styles.summaryRow}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Grand Total</Text>
                        <Text variant="titleLarge" style={{ fontWeight: 'bold', color: theme.colors.primary }}>$1,095.85</Text>
                    </View>
                    
                    <Button 
                        mode="contained" 
                        onPress={() => {}} 
                        style={{ marginTop: 16, borderRadius: 24 }}
                        contentStyle={{ height: 48 }}
                        icon="arrow-right"
                    >
                        Pay $1,095.85 Now
                    </Button>
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12, gap: 4 }}>
                        <Text style={{ fontSize: 10 }}>🔒</Text>
                        <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, fontSize: 10 }}>Payments are secure and encrypted.</Text>
                    </View>
                </Surface>
            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    card: {
        padding: 20,
        borderRadius: 16,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8fafc'
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 16,
    },
    gridItem: {
        width: '50%',
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    halfCard: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
    },
    lineItemCard: {
        padding: 16,
        borderRadius: 16,
    },
    summaryCard: { // Same style as other cards, just for clarity
        padding: 20,
        borderRadius: 16,
        marginTop: 16,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    }
});
