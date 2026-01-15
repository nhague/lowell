import ScreenWrapper from '@/components/ScreenWrapper';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, List, Switch, Text, useTheme } from 'react-native-paper';

export default function ProfileScreen() {
  const theme = useTheme();
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ScreenWrapper>
       {/* Header */}
       <View style={[styles.header, { backgroundColor: theme.colors.surface }]}> 
          <View style={{width: 48}} />
          <Text variant="titleMedium" style={{ fontWeight: '600' }}>Profile</Text>
          <Button mode="text" labelStyle={{ fontWeight: '600' }}>Edit</Button>
       </View>

       <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={styles.profileSection}>
             <View style={[styles.avatarContainer, { borderColor: theme.colors.surface }]}>
                <Image
                   source="https://lh3.googleusercontent.com/aida-public/AB6AXuB32bnUOjGRF8-h8j4HweivQKNSX8jua_2Mdj9PNiKL1sZFT_XepF9XBeiRBraUM9uiGyeZvKO1HZ1exJBJsiJkJ0o6shaFUdn_SAKfkYQeadBB21Ika5NXirnShRtvfgGXA28skGpoi1L7NvUa3HJOmBjrQJAAoZ0GNYL9eTDPIFiWrQYu0MgwMwrojAz3ezol3m62Pn4jOLA8fB-pEshNjuVILaUxtmnjfoR5h1rYadzI0QSPJgksrsJg3o6QJn_QvdRdhCjn4w8"
                   style={styles.avatar}
                />
             </View>
             <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginTop: 12 }}>Joe Rosenblith</Text>
             <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>Account Manager</Text>
          </View>

          <List.Section>
             <List.Subheader style={styles.subheader}>Business Details</List.Subheader>
             <List.Item
                title="Janitorial Solutions LLC"
                description="Business Name"
                left={props => <List.Icon {...props} icon="domain" />}
                style={{ backgroundColor: theme.colors.surface }}
             />
             <Divider />
             <List.Item
                title="99-8765432"
                description="EIN"
                left={props => <List.Icon {...props} icon="card-account-details" />}
                style={{ backgroundColor: theme.colors.surface }}
             />
          </List.Section>

          <List.Section>
             <List.Subheader style={styles.subheader}>Primary Contact</List.Subheader>
             <List.Item
                title="(617) 555-0198"
                description="Phone"
                left={props => <List.Icon {...props} icon="phone" />}
                style={{ backgroundColor: theme.colors.surface }}
             />
             <Divider />
             <List.Item
                title="joe@janitorialsolutions.com"
                description="Email"
                left={props => <List.Icon {...props} icon="email" />}
                style={{ backgroundColor: theme.colors.surface }}
             />
          </List.Section>
        
          <List.Section>
             <List.Subheader style={styles.subheader}>Notifications</List.Subheader>
             <List.Item
                title="Order Updates"
                description="Push notifications for deliveries"
                right={() => <Switch value={notifications} onValueChange={setNotifications} color={theme.colors.primary} />}
                style={{ backgroundColor: theme.colors.surface }}
             />
          </List.Section>

          <View style={{ padding: 24 }}>
             <Button 
                mode="contained" 
                buttonColor={theme.colors.error} 
                onPress={() => {}}
                contentStyle={{ height: 48 }}
                style={{ borderRadius: 12 }}
             >
                Log Out
             </Button>
             <Text style={{ textAlign: 'center', marginTop: 16, color: theme.colors.onSurfaceVariant, fontSize: 10, letterSpacing: 1 }}>VERSION 1.0.42</Text>
          </View>

       </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: 'white',
    padding: 2, // Slight gap for ring effect
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
