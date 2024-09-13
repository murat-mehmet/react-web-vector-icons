declare module 'react-web-vector-icons' {
    import React from 'react';
  
    class Icon extends React.Component<IconProps> {}
  
    interface IconProps {
      name: string;
      font: FontType;
      size?: number;
      color?: string;
    }
  
    type FontType =
      | 'AntDesign'
      | 'Entypo'
      | 'EvilIcons'
      | 'Feather'
      | 'FontAwesome'
      | 'FontAwesome5'
      | 'FontAwesome6'
      | 'Fontisto'
      | 'Foundation'
      | 'Ionicons'
      | 'MaterialCommunityIcons'
      | 'MaterialIcons'
      | 'Octicons'
      | 'SimpleLineIcons'
      | 'Zocial';
  
    export = Icon;
  }
  