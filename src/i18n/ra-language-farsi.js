export default {
    ra: {
        action: {
            delete: 'حذف',
            show: 'نمایش',
            list: 'لیست',
            save: 'ذخیره',
            create: 'ایجاد',
            edit: 'ویرایش',
            sort: 'مرتب کردن',
            cancel: 'انصراف',
            undo: 'لغو',
            refresh: 'بروزرسانی',
            add: 'اضافه',
            remove: 'حذف',
            add_filter: 'افزودن فیلتر',
            remove_filter: 'حذف این فیلتر',
            back: 'برگرد عقب',
            bulk_actions: '%{smart_count} انتخاب شده',
        },
        boolean: {
            true: 'بله',
            false: 'خیر',
        },
        page: {
            list: 'لیست %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'افزودن %{name}',
            dashboard: 'داشبورد',
            not_found: 'پیدا نشد',
            loading: 'در حال بروزرسانی',
        },
        input: {
            file: {
                upload_several:
                    'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several:
                    'Drop some pictures to upload, or click to select one.',
                upload_single:
                    'Drop a picture to upload, or click to select it.',
            },
            references: {
                all_missing: 'Unable to find references data.',
                many_missing:
                    'At least one of the associated references no longer appears to be available.',
                single_missing:
                    'Associated reference no longer appears to be available.',
            },
        },
        message: {
            yes: 'بله',
            no: 'خیر',
            are_you_sure: 'مطمئنی?',
            about: 'درباره',
            not_found:
                'یا آدرس url و اشتباه زدی, یا روی یه لینک اشتباه زدی بوده',
            loading: 'صفحه در حال بارگزاری است, لطفا چند لحظه صبر کنید',
            invalid_form: 'فرم اشتباه است. لطفا خطاها را چک کنید',
            delete_title: 'حذف %{name} #%{id}',
            delete_content: 'آیا مطمئنی میخوای این آیتم رو حذف کنی?',
            bulk_delete_title:
                'حذف %{name} |||| Delete %{smart_count} %{name} آیتم',
            bulk_delete_content:
                'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
        },
        navigation: {
            no_results: 'نتیجه ای یافت نشد',
            no_more_results: 'صفحه شماره %{page} خارج از محدوده است.',
            page_out_of_boundaries: 'صفحه شماره %{page} خارج از محدوده است.',
            page_out_from_end: 'نمیشه بیشتر از آخرین صفحه رفت! ',
            page_out_from_begin: 'نمیشه بری صفحه قبل ۱',
            page_range_info: '%{offsetBegin}-%{offsetEnd} از %{total}',
            next: 'بعدی',
            prev: 'قبلی',
        },
        auth: {
            username: 'نام کاربری',
            password: 'رمز عبور',
            sign_in: 'ورود',
            sign_in_error: 'در فرایند احراز هویت خطایی رخ داد، لطفا دوباره سعی کنید',
            logout: 'خروج',
        },
        notification: {
          updated: 'تغییرات با موفقیت بروز شد.',
            created: 'Element created',
            deleted: 'Element deleted |||| %{smart_count} elements deleted',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Element does not exist',
            http_error: 'Server communication error',
            canceled: 'Action cancelled',
        },
        validation: {
            required: 'Required',
            minLength: 'Must be %{min} characters at least',
            maxLength: 'Must be %{max} characters or less',
            minValue: 'Must be at least %{min}',
            maxValue: 'Must be %{max} or less',
            number: 'Must be a number',
            email: 'Must be a valid email',
            oneOf: 'Must be one of: %{options}',
            regex: 'Must match a specific format (regexp): %{pattern}',
        },
    },
};
