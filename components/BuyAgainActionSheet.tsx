import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Dimensions, Modal, Pressable, StyleSheet, View } from 'react-native';
import { Button, IconButton, Surface, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BuyAgainActionSheetProps {
  visible: boolean;
  item: any;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function BuyAgainActionSheet({
  visible,
  item,
  onClose,
  onAddToCart,
}: BuyAgainActionSheetProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  // Reset state when sheet opens
  React.useEffect(() => {
    if (visible) {
      setQuantity(1);
      setAdded(false);
    }
  }, [visible, item]);

  if (!visible || !item) return null;

  const handleAdd = () => {
    onAddToCart(quantity);
    setAdded(true);
    // Auto close after delay
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
        <View style={StyleSheet.absoluteFill}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
               <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
            </View>
            
            <View style={[StyleSheet.absoluteFill, { justifyContent: 'flex-end' }]} pointerEvents="box-none">
                <Surface style={[styles.sheet, { backgroundColor: theme.colors.surface, paddingBottom: insets.bottom + 16 }]} elevation={4}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={{flex: 1}} /> 
                        <IconButton icon="close" size={24} onPress={onClose} />
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        <View style={styles.itemRow}>
                            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} contentFit="cover" />
                            <View style={{ flex: 1, marginLeft: 16 }}>
                                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                <Text variant="bodyMedium" style={{ color: theme.colors.primary, fontWeight: 'bold', marginTop: 4 }}>{item.price}</Text>
                            </View>
                        </View>

                        <View style={styles.controlsRow}>
                            <View style={[styles.qtyControl, { backgroundColor: theme.colors.surfaceVariant }]}>
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
                            
                            {added ? (
                                <Button 
                                    mode="contained" 
                                    style={[styles.addButton, { backgroundColor: '#15803d' }]}
                                    contentStyle={{ height: 56 }}
                                    icon="check"
                                >
                                    {quantity} Added!
                                </Button>
                            ) : (
                                <Button 
                                    mode="contained" 
                                    style={styles.addButton}
                                    contentStyle={{ height: 56 }}
                                    onPress={handleAdd}
                                >
                                    Add {quantity} to Cart
                                </Button>
                            )}
                        </View>
                        
                        {added && (
                            <Pressable onPress={onClose} style={{ alignItems: 'center', marginTop: 16 }}>
                                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>Tap to close</Text>
                            </Pressable>
                        )}
                    </View>
                </Surface>
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 16,
    // Shadow for elevation
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 28,
    height: 56,
  },
  addButton: {
    flex: 1,
    borderRadius: 28,
  },
});
