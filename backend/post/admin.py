from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin

from post.models import CustomUser, Post


@admin.register(CustomUser)
# اگر از کلاس
# UserAdmin
# ارث بری نکند. رمز را هش نمی کند.
class CustomUserAdmin(UserAdmin):
    """
    نحوه ی استفاده از fieldsets
    کل fieldsets یک تاپل می باشد، که هر عضو آن خودن نیز یک تاپل می باشد.
    اعضا به دو بخش تقسیم می شود، بخش اول نام دسته بندی را مشخص می کند و بخش دوم که یک دیکشنری می باشد فیلد ها را مشخص می کند.
    کلید fields در دیکشنری مربوطه یک تاپل که اعضای آن نام فیلدهایی که در قرار است در این دسته بندی وجود داشته باشند نوشته می شود.
    """
    #دکمه ی سیو در بالای فرم نیز قرار داده شود
    save_on_top = True

    #ذخیره یوزر و پرکردن بقه ی اطلاعات آن بعد از ثبت یوزر
    #اگر مقدار True باشد
    save_as = False
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (  # new fieldset added on to the bottom
            'Custom Field Heading',  # group heading of your choice; set to None for a blank space instead of a header
            {
                'fields': (
                    # این فیلد جایی هست که خود عکس نمایش داده می شود
                    'avatar_tag',
                    # این فیلد آدرس عکس و انتخاب عکس می باشد.
                    'avatar',

                ),
            },
        ),
        (
            'My fields',
            {
                'fields': ('phone',)
            }
        )
    )
    # list_display = [..., 'image_tag', ]
    readonly_fields = ('avatar_tag',)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['pk', 'title', 'user', 'create_date']
    list_filter = ('create_date',)
    # برای سرچ با استفاده از فیلدهای ارتباطی به طریق زیر عمل می کنیم.
    search_fields = ('title', 'pk', 'user__username')
