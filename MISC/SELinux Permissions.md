SE Linux killing permissions on a directory Apache needs
//=====================================================================
semanage fcontext -a -t httpd_sys_rw_content_t /var/www/html/spt; restorecon -RF /var/www/html/spt
//=====================================================================
