import farsiMessages from './ra-language-farsi';

export default {
    ...farsiMessages,
    pos: {
      search: 'جستجو',
      configuration: 'تنظیمات',
      language: 'زبان',
      theme: {
          name: 'تم',
          light: 'روشن',
            dark: 'تیره'
        },
      dashboard: {},
      config: {
        general: {
          crypto: 'ارزهای دیجیتال',
          buy: 'خرید',
          sell: 'فروش'
        }
      }
    },
    resources: {
        users: {
            name: 'کاربر |||| کاربران',
            fields: {
                email: 'ایمیل',
                first_name: 'نام',
                last_name: 'نام خانوادگی',
                phone_number: 'شماره همراه',
                national_code: 'شماره ملی',
                telephone: 'شماره ثابت',
                id_card_pic: 'تصویر کارت ملی',
                id_card_is_approved: 'تصویر کارت مورد تایید است',
              user_is_approved: 'کاربر مورد تایید است',
              bank_account_is_approved: 'کارت بانکی مورد تایید است',
                profile_pic: 'عکس کاربر',
                bank_accounts: {
                    name: 'حساب بانکی',
                    fields: {
                        namefa: 'نام بانک',
                        credit_card_number: 'شماره کارت',
                        account_number: 'شماره حساب',
                        shaba: 'شماره شبا',
                        is_approved: 'کارت مورد تایید است' 
                    }
                },
                wallets: {
                    name: 'کیف پول مجازی',
                    fields: {
                        wallet_crypto: 'نام رمزارز',
                        wallet_address: 'آدرس رمزارز'
                    }
                }
            },
            tabs: {
                identity: 'اطلاعات شخصی',
                contact: 'اطلاعات تماس',
                bank_accounts: 'اطلاعات بانکی',
                wallets: 'کیف پول',
                identity_confirmation: 'تایید هویت',
                stats: 'Statistiques',
            },
            page: {
                delete: 'حذف این کاربر'
            }
        },
        orders: {
            name: 'سفارش |||| سفارش ها',
            trans: {
                selling: 'فروش',
                buying: 'خرید'
            },
            tabs: {
                situation: 'وضعیت',
              tx_specs: 'مشخصات تراکنش',
                specs: 'مشخصات'
            },
            fields: {
              amount_in_cc: 'مقدار رمزارز',
                amount_in_toman: 'مقدار به تومان',
                createdAt: "تاریخ سفارش",
                cryptocurrency: "رمزارز",
                order_type: "نوع سفارش",
                final_amount: "مقدار نهایی",
                is_approved: "پرداخت مورد تایید است",
                is_completed: "تکمیل شده",
                is_done: "تمام شده",
                is_payed: "پرداخت شده",
                order_situation: "وضعیت",
                transaction_situation: "وضعیت انتقال رمزارز",
                transaction_type: "نوع انتقال رمزارز",
                tx_ended: "انتقال رمزارز پایان یافته",
                tx_started: "انتقال رمزارز آغاز شده",
                updatedAt: "",
              user_id: "کاربر",
              destination_wallet_address : "آدرس کیف پول مقصد",
              ipg_card_pan_mask : "ماسک شماره کارت آیپیجی", // buy
              ipg_trance_no : "شماره ترنس آیپیجی", //buy
              ipg_tx_amount : "مقدار منتقل شده آیپیجی", //buy
              payment_ref_num : "شماره مرجع پرداخت", //buy
              seller_bank_acc_number : "شماره حساب بانک", //sell
              seller_bank_acc_shaba : "شماره شبا بانک", //sell
              seller_bank_credit_card_no : "شماره کارت بانک", //sell
              tx_id : "آیدی تراکنش",
              tx_pic : "تصویر فاکتور تراکنش",
              tx_sender_wallet : "آدرس ارز دیجیتال فرستنده تراکنش",
              tx_url : "لینک تراکنش"
            },
        },
        'buy-configs': {
            name: 'تنظیمات فروش',
            fields: {
                buy_profit_percentage: 'درصد سود فروش',
                buyable: 'قابل فروش',
                dollar_rate: 'نرخ دلار',
                dollar_rate_mode: 'نحوه ی گرفتن دلار',
                sym: 'رمزارز',
                transaction_fee_rate: 'نرخ تراکنش رمزارز',
                updatedAt: 'آخرین بروزرسانی'
            },
            notification: {
                approved_success: 'رمز ارز قابل فروش است',
                approved_error: 'خطایی رخ داد مجدد تلاش کنید',
                rejected_success: 'رمز ارز قابل فروش نیست',
                rejected_error:  'خطایی رخ داد مجدد تلاش کنید'
            },
            action: {
                accept: "قابل فروش",
                reject: "غیر قابل فروش"
            }
        },
        'sell-configs': {
            name: 'تنظیمات خرید',
            fields: {
                sell_profit_percentage: 'درصد سود خرید',
                sellable: 'قابل خرید',
                dollar_rate: 'نرخ دلار',
                dollar_rate_mode: 'نحوه ی گرفتن دلار',
                transaction_fee_rate: 'نرخ تراکنش رمزارز',
                sym: 'رمزارز',
              updatedAt: 'آخرین بروزرسانی',
              wallet_address: 'آدرس کیف پول'
            },
            notification: {
                approved_success: 'رمز ارز قابل خرید است',
                approved_error: 'خطایی رخ داد مجدد تلاش کنید',
                rejected_success: 'رمز ارز قابل خرید نیست',
                rejected_error:  'خطایی رخ داد مجدد تلاش کنید'
            },
            action: {
                accept: "قابل خرید",
                reject: "غیر قابل خرید"
            }
        }
    },
};
