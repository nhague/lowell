import { configureFonts, MD3LightTheme, MD3Theme } from 'react-native-paper';

const fontConfig = {
    fontFamily: 'System',
};

export const paperTheme: MD3Theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#137fec', // Lowell Blue
        onPrimary: '#ffffff',
        primaryContainer: '#dbeafe', // blue-100
        onPrimaryContainer: '#1e40af', // blue-800
        secondary: '#334155', // slate-700
        onSecondary: '#ffffff',
        secondaryContainer: '#f1f5f9', // slate-100
        onSecondaryContainer: '#0f172a', // slate-900
        tertiary: '#f59e0b', // amber-500
        onTertiary: '#ffffff',
        tertiaryContainer: '#fef3c7', // amber-100
        onTertiaryContainer: '#92400e', // amber-800
        background: '#f6f7f8',
        onBackground: '#0f172a', // slate-900
        surface: '#ffffff',
        onSurface: '#0f172a', // slate-900
        surfaceVariant: '#f1f5f9', // slate-100
        onSurfaceVariant: '#64748b', // slate-500
        outline: '#cbd5e1', // slate-300
        outlineVariant: '#e2e8f0', // slate-200
        error: '#ef4444', // red-500
        onError: '#ffffff',
        errorContainer: '#fee2e2', // red-100
        onErrorContainer: '#991b1b', // red-800
        elevation: {
            level0: 'transparent',
            level1: '#f8fafc',
            level2: '#f1f5f9',
            level3: '#e2e8f0',
            level4: '#cbd5e1',
            level5: '#94a3b8',
        }
    },
    fonts: configureFonts({ config: fontConfig }),
};
