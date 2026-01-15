import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Surface, Text, useTheme } from 'react-native-paper';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  lastOrdered?: string;
  badge?: string;
  onAdd?: () => void;
}

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  lastOrdered,
  badge,
  onAdd,
}: ProductCardProps) {
  const theme = useTheme();

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.surface }]}
      elevation={1}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          contentFit="cover"
        />
        {badge && (
          <View style={[styles.badge, { backgroundColor: '#dcfce7' }]}>
            <Text style={[styles.badgeText, { color: '#15803d' }]}>{badge}</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        {lastOrdered && (
          <View style={styles.historyContainer}>
             {/* Using material symbol font if available or simple text */}
            <Text style={[styles.historyText, { color: theme.colors.onSurfaceVariant }]}>
              {lastOrdered}
            </Text>
          </View>
        )}
        <Text
          variant="labelMedium"
          style={[styles.title, { color: theme.colors.onSurface }]}
          numberOfLines={2}
        >
          {title}
        </Text>

        <View style={styles.priceContainer}>
           <View>
              {originalPrice && (
                <Text
                  variant="bodySmall"
                  style={[styles.originalPrice, { color: theme.colors.onSurfaceVariant }]}
                >
                  {originalPrice}
                </Text>
              )}
              <Text
                variant="titleSmall"
                style={[styles.price, { color: theme.colors.primary }]}
              >
                {price}
              </Text>
           </View>
          <IconButton
            icon="plus"
            mode="contained"
            containerColor={theme.colors.primary}
            iconColor={theme.colors.onPrimary}
            size={20}
            onPress={onAdd}
            style={styles.addButton}
          />
        </View>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    // Note: Paper Surface elevation handles shadow, but we can tweak if needed
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  historyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  historyText: {
    fontSize: 10,
    fontWeight: '500',
  },
  title: {
    fontWeight: '600',
    marginBottom: 8,
    height: 40, // Fixed height for 2 lines
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    fontSize: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  addButton: {
    margin: 0,
    width: 32,
    height: 32,
  },
});
