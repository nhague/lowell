import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, Modal, Pressable, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text, TextInput, useTheme } from 'react-native-paper';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface PaymentBottomSheetProps {
    visible: boolean;
    onDismiss: () => void;
    amount: string;
    onSuccess?: () => void;
}

export default function PaymentBottomSheet({ visible, onDismiss, amount, onSuccess }: PaymentBottomSheetProps) {
    const theme = useTheme();
    const translateY = useSharedValue(SCREEN_HEIGHT);
    const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
    const [showModal, setShowModal] = useState(visible);

    // Sync visibility with animation
    useEffect(() => {
        if (visible) {
            setShowModal(true);
            setStatus('idle');
            translateY.value = withTiming(0, { duration: 300 });
        } else {
            translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 }, () => {
                runOnJS(setShowModal)(false);
            });
        }
    }, [visible]);

    const handleBackdropPress = () => {
        onDismiss();
    };

    const handlePayment = () => {
        Keyboard.dismiss();
        setStatus('processing');
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            if (onSuccess) {
                // Wait a moment for the user to see the success message before closing/calling callback
                setTimeout(() => {
                    // Optional: Auto dismiss or let user dismiss
                    // onDismiss();
                }, 1500);
            }
        }, 2000);
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <Modal
            visible={showModal}
            transparent
            animationType="none"
            onRequestClose={onDismiss}
            statusBarTranslucent
        >
            <View style={StyleSheet.absoluteFill}>
                 {/* Overlay */}
                <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                    <Pressable style={StyleSheet.absoluteFill} onPress={handleBackdropPress} />
                </View>

                <Animated.View style={[styles.container, animatedStyle, { backgroundColor: theme.colors.elevation.level3 }]}>
             <View style={styles.handleContainer}>
                <View style={[styles.handle, { backgroundColor: theme.colors.outline }]} />
            </View>

            <View style={styles.content}>
                {status === 'success' ? (
                    <View style={styles.successContainer}>
                        <View style={[styles.iconContainer, { backgroundColor: '#dcfce7' }]}>
                            <IconButton icon="check" iconColor="#15803d" size={48} />
                        </View>
                        <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginTop: 16 }}>Payment Successful!</Text>
                        <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant, textAlign: 'center', marginTop: 8 }}>
                            Your payment of {amount} has been processed securel.
                        </Text>
                        <Button 
                            mode="contained" 
                            onPress={onDismiss} 
                            style={{ marginTop: 32, width: '100%' }}
                        >
                            Done
                        </Button>
                    </View>
                ) : (
                    <>
                        <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginBottom: 24 }}>Make Payment</Text>
                        
                        <TextInput
                            label="Card Number"
                            mode="outlined"
                            placeholder="0000 0000 0000 0000"
                            keyboardType="numeric"
                            style={styles.input}
                            disabled={status === 'processing'}
                            left={<TextInput.Icon icon="credit-card" />}
                        />

                        <View style={styles.row}>
                            <TextInput
                                label="Expiry"
                                mode="outlined"
                                placeholder="MM/YY"
                                keyboardType="numeric"
                                style={[styles.input, { flex: 1 }]}
                                disabled={status === 'processing'}
                            />
                            <View style={{ width: 16 }} />
                            <TextInput
                                label="CVV"
                                mode="outlined"
                                placeholder="123"
                                keyboardType="numeric"
                                secureTextEntry
                                style={[styles.input, { flex: 1 }]}
                                disabled={status === 'processing'}
                            />
                        </View>

                        <TextInput
                            label="Cardholder Name"
                            mode="outlined"
                            placeholder="John Doe"
                            style={styles.input}
                            disabled={status === 'processing'}
                        />

                        <Button 
                            mode="contained" 
                            onPress={handlePayment} 
                            style={{ marginTop: 16, paddingVertical: 6 }}
                            disabled={status === 'processing'}
                            loading={status === 'processing'}
                        >
                            Pay {amount}
                        </Button>
                        
                        <View style={styles.secureBadge}>
                            <Text style={{ fontSize: 12, color: theme.colors.onSurfaceVariant }}>
                                <Text style={{fontSize: 10}}>🔒</Text> End-to-end encrypted transaction
                            </Text>
                        </View>
                    </>
                )}
            </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingBottom: 40, // for safe area roughly
        elevation: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        zIndex: 1000,
    },
    handleContainer: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    handle: {
        width: 32,
        height: 4,
        borderRadius: 2,
    },
    content: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    input: {
        marginBottom: 16,
        backgroundColor: 'transparent',
    },
    row: {
        flexDirection: 'row',
    },
    successContainer: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secureBadge: {
        alignItems: 'center',
        marginTop: 16,
    }
});
