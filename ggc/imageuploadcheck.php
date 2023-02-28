<meta charset="utf-8"/>
<?php
	$file_name=$_FILES['upload_file']['name'];
	$tmp_file=$_FILES['upload_file']['tmp_name'];
	$file_name2=$_FILES['upload_file2']['name'];
	$tmp_file2=$_FILES['upload_file2']['tmp_name'];
	
	if(!isset($file_name)||!isset($file_name2)||$file_name==NULL||$file_name2==NULL) {
		echo "파일을 업로드해주세요";
		exit(1);
	}
	
	$file_path='./profile-img.png';
	$file_path2='./background-img.png';

	if(file_exists($file_path)) {
		unlink($file_path);
	}
	if(file_exists($file_path2)) {
		unlink($file_path2);
	}
	move_uploaded_file($tmp_file, $file_path);
	move_uploaded_file($tmp_file2, $file_path2);

echo "<script>alert('적용되었습니다');history.go(-1);</script>";
?>