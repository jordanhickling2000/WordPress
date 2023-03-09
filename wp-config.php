<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/** Enable W3 Total Cache */

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_levelup' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'v#3B<.t/$X&rHF+Kp(Z$la9Q6,)IpT_YA]^?Dq/K?*[do~56QZ,@Nwr0Y :5hugP' );
define( 'SECURE_AUTH_KEY',  'E&-,Ev!YOLF?gU)4k-v.x2X0L:9f@if+=Sm$OcOh+de/n;-W9Z5G=4G,XkoV~:~3' );
define( 'LOGGED_IN_KEY',    '<ZuRGx_H*]VVA%ASpz:FzeP#D%+] 3qTS#ojYZg9CRhVZ[wEQIMx,UOKE[?<CV;5' );
define( 'NONCE_KEY',        '`&oBX[6JJrbcuQ[9zaNR8nJWe^9NXL=U]=Ui/?lLBX=Ft;Ub0D1kiFK b2KG-<7u' );
define( 'AUTH_SALT',        '8ruf(DLHfsS$dgeA;S/5OS)UOpT32,Y&(tc>}U%Hq t,j? 9Exwk!ilAXH6Oyh@W' );
define( 'SECURE_AUTH_SALT', 'Q_x@NI|}l}w9qzT+l}a&Mc6o1V][CEc]3vxKQYq<SeX8$ge&o<+1+*Wt}mT>AOn^' );
define( 'LOGGED_IN_SALT',   'PoQ$7qhC5B(]cc=_3V#%)9QUiygxnwor(oL/ZRdz1uiV]J^7_XkjQuvzGUkPj/<>' );
define( 'NONCE_SALT',       'ad`}^v6odFJy99%TFJU8;3YLiRQ}}0VQ+XKPTljzTF.-]( 2Z e2yS b7<;=|XqX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
